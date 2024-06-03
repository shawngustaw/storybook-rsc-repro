import { getClient } from "@/apollo/Apollo";
import { gql } from "@apollo/client";

const query = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      status
      message
      results {
        url
        name
        image
      }
    }
  }
`;
export default async function Pokemon() {
  const { data } = await getClient().query({
    query,
  });

  console.log(data);

  return (
    <div>
      {data.pokemons.results.map((pokemon: any) => (
        <div key={pokemon.url}>
          <img src={pokemon.image} alt={pokemon.name} />
          <p>{pokemon.name}</p>
        </div>
      ))}
    </div>
  );
}
