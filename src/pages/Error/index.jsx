import { Link } from "react-router-dom"
import PageTitle from "../../components/PageTitle"

export default function Error() {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center flex-column mt-5 pt-5">
                <PageTitle description="Erro: 404" fontSize="3rem" />
                <PageTitle description="Página não encontrada..." />
                <Link className="btn btn-outline-light my-3" to="/">
                    Veja todos os filmes!
                </Link>
            </div>
        </>
    )
}
