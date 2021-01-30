import Link from "next/link";
import fetch from "isomorphic-unfetch";
import { Button, Card } from "semantic-ui-react";

const List = ({ tfrs }) => {
  return (
    <div className="tfrs-container">
      <h1>TFRs</h1>
      <div className="grid wrapper">
        {tfrs.map((tfr) => {
          return (
            <div key={tfr._id}>
              <Card>
                <Card.Content>
                  <Card.Header>
                    <Link href={`${tfr._id}`}>
                      <a>{tfr.numeroRTC}</a>
                    </Link>
                  </Card.Header>
                </Card.Content>

                <Card.Content>
                  <a>{tfr.idSitio}</a>
                </Card.Content>
                <Card.Content>
                  <a>{tfr.dataFalha}</a>
                </Card.Content>
                <Card.Content>
                  <a>{tfr.descricao}</a>
                </Card.Content>
                <Card.Content>
                  <a>{tfr.tempoGasto}</a>
                </Card.Content>

                <Card.Content extra>
                  <Link href={`${tfr._id}/edit`}>
                    <Button primary>Edit</Button>
                  </Link>
                </Card.Content>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

List.getInitialProps = async () => {
  const res = await fetch("http://localhost:3000/api/tfrs");
  const { data } = await res.json();

  return { tfrs: data };
};

export default List;
