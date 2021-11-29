export default function Home(){
    const title = <div><h1>HIT</h1></div>
    function Subtitle(){
        return <div><h2>Hyguana Informática e Tecnologias.</h2></div>
    }
    return (
        <div>
            {title}
            {Subtitle()}
        </div>
    )
}