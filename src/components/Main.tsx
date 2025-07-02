import imgMain from "../assets/main.jpg";
import "./Main.css";

const images: Record<string, { default: string}> = import.meta.glob("../assets/friend*.jpg", { eager: true });
const imageList: string[] = Object.values(images).map(obj => obj.default);

const Main = () => {
    return (
        <main className="clearfix">
            <section className="float-start w-25 me-3">
                <img className="w-100" src={imgMain} alt="Hero"/>
            </section>
            <section className="float-end row w-50 border rounded-bottom-4 me-0 ms-2">
                <h2 className="text-center">Dream team</h2>
                {imageList.map((img, idx)=>{
                    return <img className="col-sm-4 p-1" key={idx} src={img} alt={`Friend ${1 +idx}`}></img>
                }) }
                {/*<img className="col-sm-4 p-1" src={img1} alt="Friend"/>*/}
                {/*<img className="col-sm-4 p-1" src={img2} alt="Friend"/>*/}
                {/*<img className="col-sm-4 p-1" src="../assets/friend1.jpg" alt="Friend"/>*/}
                {/*<img className="col-sm-4 p-1" src="../assets/friend1.jpg" alt="Friend"/>*/}
                {/*<img className="col-sm-4 p-1" src="../assets/friend1.jpg" alt="Friend"/>*/}
                {/*<img className="col-sm-4 p-1" src="../assets/friend6.jpg" alt="Friend"/>*/}
                {/*<img className="bottomLeft col-sm-4 p-1" src="../assets/friend7.jpg" alt="Friend"/>*/}
                {/*<img className="col-sm-4 p-1" src="../assets/friend8.jpg" alt="Friend"/>*/}
                {/*<img className="bottomRight col-sm-4 p-1" src="../assets/friend9.jpg" alt="Friend"/>*/}
            </section>
            <p className="farGalaxy">It is a period of civil war.
                Rebel spaceships, striking
                from a hidden base, have won
                their first victory against
                the evil Galactic Empire.

                During the battle, Rebel
                spies managed to steal secret
                plans to the Empire's
                ultimate weapon, the DEATH
                STAR, an armored space
                station with enough power
                to destroy an entire planet.

                Pursued by the Empire's
                sinister agents, Princess
                Leia races home aboard her
                starship, custodian of the
                stolen plans that can save her
                people and restore
                freedom to the galaxy....</p>
        </main>
    );
};

export default Main;