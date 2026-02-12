export default function Header({ name }: { name: string }) {
  // Navigation Panel with sign out button and User name
  return (
    <header>
      <div>{name}</div>
      <div>
        {/* Header is now purely presentational; sign-out removed */}
      </div>
    </header>
  )
}
