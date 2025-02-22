import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
  {
    userName: "midudev",
    name: "Miguel Ángel Durán",
    isFollowing: true,
  },
  {
    userName: "pheralb",
    name: "Pablo Hernández",
    isFollowing: true,
  },
  {
    userName: null,
    name: "Juanpe",
    isFollowing: false,
  },
];

export function App() {
  return (
    <section className="App">
      {/* Como se harían uno a uno */}
      {/* <TwitterFollowCard userName="midudev" isFollowing>
                Miguel Ángel Durán	
            </TwitterFollowCard>

            <TwitterFollowCard userName="pheralb" isFollowing>
                Pablo Hernández
            </TwitterFollowCard>
            
            <TwitterFollowCard>
                Juanpe
            </TwitterFollowCard> */}
      {/* Como hacer todos del tirón */}
      {users.map((user) => {
        const { userName, name, isFollowing } = user;
        return (
          <TwitterFollowCard userName={userName} isFollowing={isFollowing} key = {userName}>
            {name}
          </TwitterFollowCard>
        );
      })}
    </section>
  );
}
