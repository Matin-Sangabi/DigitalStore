import { useState } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function TabContents() {
  let [days] = useState({
    Monday: [
      {
        id: 1,
        date: '9-23',
      },
    ],
    Tuesday: [
      {
        id: 1,
        date: '9-23',
      }
    ],
    Wednesday: [
        {
          id: 1,
          date: '9-23',
        }
      ],
      Friday: [
        {
          id: 1,
          date: '9-23',
        }
      ],
      Saturday: [
        {
          id: 1,
          date: 'None',
        }
      ],
      Sunday: [
        {
          id: 1,
          date: 'None',
        }
      ],
    
  })

  return (
    <div className="w-full  px-2 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-2 md:space-x-1  rounded-xl bg-cyan-900 bg-opacity-80 p-2 md:p-1 overflow-auto">
          {Object.keys(days).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-semibold leading-5 text-cyan-700',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-cyan-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(days).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl bg-white p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >
              <ul>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative rounded-md p-3 hover:bg-gray-100 flex items-center gap-x-2"
                  >
                    <label htmlFor='tab'></label>
                    <input type="radio" name='tab'/>
                
                    <ul className="flex space-x-1 text-sm font-normal  text-gray-500">
                      <li>{post.date}</li>
                      <li>&middot;</li>
                      <li>{post.commentCount} Hour</li>
                    </ul>

                    
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}