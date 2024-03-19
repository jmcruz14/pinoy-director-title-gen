import Link from 'next/link'

function FooterCard () {
  return (
    <>
      <div className="flex">
        <span className="text-sm text-end">More works by him&nbsp;
        <Link href="https://jmcruz.dev" className="hover:underline" target='_blank'>
          here
        </Link>
        .
        </span>
      </div>
    </>
  )
}

export default FooterCard;