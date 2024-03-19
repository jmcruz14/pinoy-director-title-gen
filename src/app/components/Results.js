'use client'

// import { Image } from 'next/image'
import { useState } from 'react';
import { Combobox } from '@headlessui/react';

import Icon from '@mdi/react';
import { mdiMagnify } from '@mdi/js';

import { GetServerSideProps } from 'next';

// NOTE: searchDirector produces error
// import { searchDirector } from '@/requests/index'

const people = [
  'Durward Reynolds',
  'Kenton Towne',
  'Therese Wunsch',
  'Benedict Kessler',
  'Katelyn Rohan',
]


function ResultsCard () {
  const [directorQuery, setDirectorQuery] = useState('');
  // const [selectedPerson, setSelectedPerson] = useState([])

  const [selectedPerson, setSelectedPerson] = useState(people[0])
  const [query, setQuery] = useState('')

  const filteredPeople =
    query === ''
      ? people
      : people.filter((person) => {
          return person.toLowerCase().includes(query.toLowerCase())
        })
        

  return (
    <>
      <div className="flex flex-col min-h-[50%] w-full items-center p-8 gap-6">
        <div className="w-full max-w-sm rounded-lg border border-gray-200 dark:border-gray-700">
          <Combobox
            className="rounded-lg bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-700 p-4"
            value={selectedPerson}
            onChange={setSelectedPerson}
            as="div"
          >
            <div className="flex items-center gap-4">
              <Icon path={mdiMagnify} size={1} />
              <Combobox.Input 
                className="text-sm text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-950 flex-1
                    focus:outline-none"
                placeholder="Search for a film director"
              />
            </div>
            <Combobox.Options >
              {filteredPeople.map((person) => (
                <Combobox.Option className="flex items-center gap-4 py-2" key={person} value={person}>
                  <div className="text-sm">
                    <div className="font-medium">{person}</div>
                    <div className="text-xs leading-none">American film director, producer, and screenwriter.</div>
                  </div>
                </Combobox.Option>
              ))}
            </Combobox.Options>
            {/* <Combobox.Options>
              <Combobox.Option>Test</Combobox.Option>
            </Combobox.Options> */}
          </Combobox>
        </div>

        
        <span>{selectedPerson}</span>

        {/* <a href="/"><button className="bn632-hover bn25">Button</button></a> */}
      </div>
    </>
  )
}

export default ResultsCard;