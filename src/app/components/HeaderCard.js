export function HeaderCard () {
  return (
    <>
      <div className="flex flex-row gap-12 justify-around items-center">
        <span className="text-5xl font-extrabold">Pinoy Director Search</span>
        <span className="text-md">A Simple Search by Jay</span>
      </div>
      <div className="description">
        <span className="font-semibold">Instructions</span>
        <ol>
          <li>1. Type into input box below</li>
          <li>2. Press ENTER</li>
          <li>3. See results.</li>
        </ol>
      </div>
    </>
  )
}

export default HeaderCard;