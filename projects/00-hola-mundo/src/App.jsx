import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

export function App(){
    const formatUserName = (userName) => `@${userName}`

    return(
        <section class="App">
            <TwitterFollowCard userName="midudev" name="Miguel Ángel Durán" isFollowing/>
            <TwitterFollowCard userName="pheralb" name="Pablo Hernández" isFollowing/>
            <TwitterFollowCard userName="vxnder" name="Vanderhart" isFollowing={false}/>
        </section>
    )
}