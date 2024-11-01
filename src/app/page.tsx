export default async function Home(props: {
  searchParams: Promise<{ username?: string | string[] }>;
}) {
  const { username } = await props.searchParams;

  return (
    <div>
      <h1>
        Hello,{" "}
        {typeof username === "string"
          ? username
          : Array.isArray(username)
          ? username.join(", ")
          : "anonymous user"}
        !
      </h1>
    </div>
  );
}
