// import SomeToggleSwitch from '../islands/SomeToggleSwitch.jsx';
import SomeToggleSwitchIsland from '../islands/SomeToggleSwitch.jsx?island';
import { Island } from '@hubspot/cms-components';
import BookOpenIcon from '@heroicons/react/24/solid/esm/BookOpenIcon.js';

import calvinImg from '../../assets/calvin.jpeg';
import kristenImg from '../../assets/kristen.jpeg';
import tedImg from '../../assets/ted.jpeg';
import '../../styles/tailwind.css';

const people = [
  {
    name: 'Calvin Hawkins',
    email: 'calvin.hawkins@example.com',
    image: `${calvinImg}?name=calvin&width=150`,
  },
  {
    name: 'Kristen Ramos',
    email: 'kristen.ramos@example.com',
    image: `${kristenImg}?name=kristen&width=150`,
  },
  {
    name: 'Ted Fox',
    email: 'ted.fox@example.com',
    image: `${tedImg}?name=ted&width=150`,
  },
];

export default function Example() {
  return (
    <>
      <ul className="divide-y divide-gray-200">
        {people.map((person) => (
          <li key={person.email} className="py-4 flex">
            <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">{person.name}</p>
              <p className="text-sm text-gray-500">{person.email}</p>
            </div>
          </li>
        ))}
      </ul>

      <Island
        module={SomeToggleSwitchIsland}
        id="custom-id"
        defaultChecked={false}
      />

      <dl>
        <dt>BookOpen</dt>
        <dd>
          <BookOpenIcon width={200} />
        </dd>
      </dl>
    </>
  );
}
