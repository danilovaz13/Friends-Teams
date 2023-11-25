import {useState} from 'react';
import {FlatList} from 'react-native';
import {Header} from '@components/Header';
import {Highlight} from '@components/Highlight';
import {GroupCard} from '@components/GroupCard';
import {Container} from './styles';

export function Groups() {
  const [groups, setGroups] = useState<string[]>(['Turma 1', 'Amigos']);

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={item => String(item)}
        renderItem={({item}) => <GroupCard title={item} />}
      />
    </Container>
  );
}
