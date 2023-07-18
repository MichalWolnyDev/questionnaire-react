import Container from "../ui/Container";
import type { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import Question from "../question/Question";

const Questionnaire = () => {
  const dictionary = useSelector((state: RootState) => state.questions.dictionary)

  return (
    <section>
      <Container>
        {dictionary.map((item, id) => (
          <Question title={item.title} questions={item.questions} key={id} id={id + 1} checkedCount={item.checkedCount} groupId={item.groupId}/>
        ))}
      </Container>
    </section>
  );
};

export default Questionnaire;
