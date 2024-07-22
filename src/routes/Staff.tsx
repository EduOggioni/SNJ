import rankData from "../mock/ranks.json"
export function Staff() {
  return (
    <>
      <h1 className="text-2xl mb-10">Nossa guilda é dividida em ranks:</h1>
      {rankData.ranks.map((rank) => 
        <>
          <h3 className={"text-xl text-["+rank.color+"]"}>{rank.title}</h3>
          <p className=" mb-4 text-lg mx-5 text-[#F5F5F4]">
            {rank.description}
          </p>
        </>
      )}
      {rankData.extras.map((extra) => 
      <p className=" mb-4 text-lg indent-4">
        {extra}
      </p>
      )}
    </>
  );
}
