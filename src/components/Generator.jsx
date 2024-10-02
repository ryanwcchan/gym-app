import SectionWrapper from "./SectionWrapper"

export default function Generator({ children }) {
  return (
    <SectionWrapper
        header={"generate your workout"}
        title={['Conquer', 'your', 'limits']}
    >
        {children}
    </SectionWrapper>
  )
}
