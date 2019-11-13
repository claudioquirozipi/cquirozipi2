import * as React from 'react';
//Boostrap
import {
    Card,
    Button
} from 'react-bootstrap';
//Styled-Components
import {
    Container,
    ContainerProjects,
    CardContainer
} from './styled';

//Data
import {data} from './data';


function Projects() {
    return(
        <Container>

        <ContainerProjects>
            {data.map((data, i)=>{
                return(
                    
                    <Card key={i} style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={data.img} />
                            <Card.Body>
                                <Card.Title>{data.title}</Card.Title>
                                <Card.Text>{data.description}</Card.Text>
                                {   data.urlGithub !== ""?
                                    <Card.Link href={data.urlGithub} target="_black">Github</Card.Link>
                                    : null
                                }
                                {   data.urlWeb !== ""?
                                    <Card.Link href={data.urlWeb} target="_black" >Web</Card.Link>
                                    : null
                                }
                            </Card.Body>
                        </Card>
                    
                )})
            }
        </ContainerProjects>
        </Container>
    
    )
}

export default Projects;