import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { useForm } from 'react-hook-form';
import { PageHeader, Skeleton, Button, Descriptions } from 'antd';
import 'antd/dist/antd.css';
import './index.css';
import { routes } from 'technical/routes/index';
import useRequest from 'technical/request/services';
import InputSwitcher from 'components/InputSwitcher';
import { getPersonDetailsResponseType } from 'business/Person/services/types';

interface MatchParams {
  id: string;
};

interface IProps extends RouteComponentProps<MatchParams>{};

const Details = ({ history, location, match }: IProps) => {
  const [toggleInput, setToggleInput] = useState<boolean>(false);
  const { data, loading } = useRequest(`persons/${match.params.id}`);
  const { register } = useForm<getPersonDetailsResponseType>({ defaultValues: {
    name: data?.name || '',
    dob: data?.dob || '',
    type: data?.type || '',
    description: data?.description || '',
  } });

  const handleToggle = () => setToggleInput(!toggleInput);

  const handleChange = (value: string) => {
    console.log(value);
  }

  if(loading) return <Skeleton/>

  return (
    <div className="site-page-header">
      <PageHeader
        ghost={false}
        extra={[
          <Button key="1" type="primary" onClick={handleToggle}>Modifier les informations</Button>,
          <>{toggleInput && <Button onClick={handleToggle}>Annuler</Button>}</>,
          <Button key="2">Supprimer</Button>
        ]}
        onBack={() => history.push(routes.personList)}
        title={`Détails de la personne ${data.name}`}
      />
      <Descriptions size='small'>
        <Descriptions.Item label="Nom">
          <InputSwitcher 
            value={data.value}
            type="text" 
            toggleInput={toggleInput} 
            name='name'
            onChange={handleChange} 
          />
        </Descriptions.Item>
        <Descriptions.Item label="Date de Naissance">
          <InputSwitcher 
            type="date" 
            toggleInput={toggleInput} 
            value={data.dob}
            options={['truc', 'machin']}
            name='description'
            onChange={handleChange} 
          />
        </Descriptions.Item>
        <Descriptions.Item label="Type">
          <InputSwitcher 
            type="select" 
            toggleInput={toggleInput} 
            value={data.type}
            options={['truc', 'machin']}
            name='description'
            onChange={handleChange} 
          />
        </Descriptions.Item>
        <Descriptions.Item>
          <InputSwitcher 
              type="textArea"
              rows={2}
              toggleInput={toggleInput} 
              value={data.description}
              name='description'
              onChange={handleChange} 
            />
        </Descriptions.Item>
      </Descriptions>
    </div>
  )
}

export default Details