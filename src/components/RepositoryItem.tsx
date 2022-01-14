interface RepositoryItemProps {
    repository: {
        name: string;
        description: string;
        html_url: string;
    }
//teste de git
}

export function RepositoryItem(props: RepositoryItemProps) {
    return (
            <li>
                {/* aqui estou puxando as informações do objeto que criei no componente pai, const repository */}
                <strong>{props.repository.name}</strong>
                <p>{props.repository.description}</p>
                <a href={props.repository.html_url}>Acessar Repositório</a>
            </li>
     );
}