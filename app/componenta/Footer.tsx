import React from 'react'
import Social from './Social'

function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-100">
        <div className="mx-auto max-w-7xl px-4 py-10 grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <p className="font-serif text-xl">Italian Pizza Sydney</p>
            <p className="mt-2 text-stone-300">Mobile wood‑fired pizza catering across Sydney.</p>
          </div>
          <div>
            <p className="font-medium">Contact</p>
            <ul className="mt-2 space-y-1 text-stone-300">
              <li>Italianpizzasydney88@gmail.com</li>
              <li>+61 0481 769 450</li>
            </ul>
          </div>
          <div>
            <p className="mb-2 space-y-1 font-medium">Follow</p>
            <Social />
            {/* <ul className="mt-2 space-y-1 text-stone-300">
              <li>@instagram</li>
              <li>@facebook</li>
            </ul> */}
          </div>
        </div>
        <div className="border-t border-stone-700">
          <div className="mx-auto max-w-7xl px-4 py-4 text-sm text-stone-300 flex flex-wrap items-center justify-between gap-2">
            <p>© {new Date().getFullYear()} Italian Pizza Sydney</p>
            <p>ABN: 51 687 754 034</p>
          </div>
        </div>
      </footer>
  )
}

export default Footer
