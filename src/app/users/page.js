import UserCard from "@/component/UserCard";

export default async function Users() {
  const users = await fetchUser();
  return (
    <div className="flex min-h-screen flex-wrap items-center justify-between p-10">
      {users.map((user) => (
        <UserCard
        key={users.id}
          name={user.name}
          avatar={user.avatar}
        />
      ))}
    </div>
  );
}

async function fetchUser(){
    const response = await fetch (`https://api.escuelajs.co/api/v1/users?limit=8`,{
        cache: 'no-store',
    });
    return response.json();
}