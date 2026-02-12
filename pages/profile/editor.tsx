import Header from "@/components/header/header";
import { signIn, signOut, useSession } from "next-auth/react";

export default function ProfileEditor() {
  const { data: session, status } = useSession()
  console.log(session)

  if (status === "loading") {
    return <p>Loading...</p>
  }

  if (status === "unauthenticated") {
    return <p>Access Denied <button onClick={() => signIn()}>Sign In</button></p>
  }

  return (
    <div>
      <Header name={session?.user?.name || ''}/>
      <h1>Profile Editor</h1>
      {/* Create form to edit user info */}
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="text" name="email" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

// Add this to disable static generation and use server-side rendering
export async function getServerSideProps() {
  return {
    props: {},
  };
}