import Head from "next/head"

const Header = ({name}) => {
  return (
    <Head>
        <title>{name}</title>
    </Head>
  )
}

export default Header
