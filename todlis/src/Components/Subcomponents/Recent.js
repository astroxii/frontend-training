import "../../Styles/Recent.css";

export default function Recent({user, setUser, theme})
{
    return(
        <section className={`subview ${theme}-background`}>
            Listas e Lembretes recentes...
        </section>
    );
}