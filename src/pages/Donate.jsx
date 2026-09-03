import GenericPage from './GenericPage';
import { donateContent } from '../data/pageContent';

export default function Donate() {
  return <GenericPage content={donateContent} path="/donate" />;
}
