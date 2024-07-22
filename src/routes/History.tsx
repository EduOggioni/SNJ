import guildData from "../mock/guild.json"
export function History() {
  return (
    <>
      {guildData.lore.map((paragraph) => 
      <p className=" mb-4 text-xl indent-10">
        {paragraph}
      </p>
      )}
    </>
  );
}
