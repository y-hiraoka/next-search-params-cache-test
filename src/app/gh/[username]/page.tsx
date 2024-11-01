export default async function Home(props: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await props.params;

  const data =
    typeof username === "string"
      ? await fetch(`https://api.github.com/users/${username}`, {
          cache: "force-cache",
          next: { tags: [`githubuser:${username}`] },
        }).then((res) => res.json())
      : null;

  return (
    <div>
      <h1>
        Hello, {typeof username === "string" ? username : "anonymous user"}!
      </h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
