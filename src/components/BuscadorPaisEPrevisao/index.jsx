import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import { useQuery as useQueryStack } from "@tanstack/react-query";
import { useState } from "react";
import axios from "axios";

const BUSCAR_PAIS = gql`
  query BuscarPais($termo: String!) {
    countries(filter: { name: { regex: $termo } }) {
      name
      emoji
      capital
    }
  }
`;

const fetchPrevisao = async (capital) => {
  const response = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather",
    {
      params: { apikey: "20b9177c21bb193074c56ce7fa26c0c9", q: capital, units: "metric" },
    },
  );

  if (response.data.Response === "False") {
    throw new Error("Nenhuma previsão encontrada");
  }

  return response.data;
};

export default function BuscadorPaisEPrevisao() {
  const [pais, setPais] = useState("Brazil");

  const { loading, error, data } = useQuery(BUSCAR_PAIS, {
    variables: { termo: pais },
  });

  const capital = data?.countries?.[0]?.capital;

  const {
    data: previsao, isLoading: loadingPrevisao
  } = useQueryStack({
    queryKey: ["previsao", capital],
    queryFn: () => fetchPrevisao(capital),
    enabled: !!capital,
  });

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

  return (
    <div className="p-4 flex flex-col gap-4 max-w-md">
      <input
        type="text"
        value={pais}
        onChange={(e) => setPais(capitalize(e.target.value))}
        placeholder="Brazil"
        className="p-2 border-2 border-orange-500 rounded outline-none focus:ring-2 focus:ring-orange-300"
      />

      {loading && <p className="text-gray-500">Buscando país...</p>}
      {error && <p className="text-red-500">Erro na base de países.</p>}

      {data && data.countries.length > 0 && (
        <div className="p-4 bg-orange-500 text-white rounded-lg shadow">
          <h2 className="text-xl font-bold">{data.countries[0].name}</h2>
          <p>Bandeira: {data.countries[0].emoji}</p>
          <p>Capital: {capital}</p>
          
          <div className="mt-4 p-3 bg-white/20 rounded-md">
            {loadingPrevisao ? (
              <p className="text-sm">Buscando clima...</p>
            ) : previsao ? (
              <p className="font-semibold text-lg">
                Clima em {capital}: {Math.round(previsao.main.temp)}°C 
                <span className="text-sm font-normal block">
                  ({previsao.weather[0].description})
                </span>
              </p>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}
