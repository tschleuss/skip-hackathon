import React from 'react'
import Routes from './routes'
import DocumentTitle from 'react-document-title'
import Favicon from 'react-favicon'

const AppRoutes = () =>
    <DocumentTitle title='SkipTheDishes'>
        <div>
            <Favicon url='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAMAAABl5a5YAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAq1BMVEX////+/v7x0tLsv7/x0dH//v7wzMy5FhayAACzAAC+Jyf46en78fG4EhKxAAC9JSXKTk7DNjbIRkbnr6+uAAD9+/v89/f79PTqurqwAADjoKD67+/BLy+6GBjUcXH56uq3Dw/EODj89PTz2dnUcHCzAQHrvLz9+fm1Bwflqqr46OjDNzfYfn7flJTOWlq1BgbhmZmvAADVcXH78vLlqKjXenrUb2/bhYXvy8v6d2DFAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAd0SU1FB+IDEQ4DCBc1rPgAAAB9SURBVBjTY2AgDjAikVAWEzMLK5IKNnYOTk4ubjifh5ePX0BQCKFFWISDQVRMHKFDQkRSShrZUDEZPg5ZOWRr5YUUOPgUlRiRrFVWUeVQg/MZ1YHaNCQ14Tq0tHV09VT12eBaDAw5OTk4jBBmGpuYmplbIHzECDMKn88RAACJsgdJw8Fv3gAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wMy0xN1QxNDowMzowOC0wNzowMNTTaXAAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDMtMTdUMTQ6MDM6MDgtMDc6MDCljtHMAAAAAElFTkSuQmCC' />
            <Routes/>
        </div>
    </DocumentTitle>

export default AppRoutes
