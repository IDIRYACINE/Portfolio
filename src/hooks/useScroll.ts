import { useEffect, useRef } from "react"


export const useScrollProject = () => {
    const elementRef = useRef<HTMLDivElement>(null)
    const lastScrollPosition = useRef<number>(0)
    const isScrolling = useRef<boolean>(false)

    useEffect(() => {

        const element = elementRef.current

        if (!element) return


        const handleScroll = (ev: Event) => {
            ev.preventDefault()
            ev.stopPropagation()
            ev.stopImmediatePropagation()

            if(isScrolling.current) return

            isScrolling.current = true
            setTimeout(() => {
                console.log(isScrolling.current)

                    isScrolling.current = false;

                    const yPosition = element?.scrollTop
                    const htmlFontSize = getComputedStyle(document.documentElement).fontSize
                    const scrollAmount = 24 * parseFloat(htmlFontSize)

                    const scrollDown = yPosition > lastScrollPosition.current
                    element.scrollBy({
                        top: scrollDown ? scrollAmount : -scrollAmount,
                    })

                    lastScrollPosition.current = yPosition ? yPosition : 0
            }, 300);


        }

        element.addEventListener('scroll', handleScroll)


        return () => {
            element?.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return elementRef
}