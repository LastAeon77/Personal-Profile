import transcript from '../images/transcript.pdf'
export function Transcript() {
    return (
        <div>
            <embed src={transcript} width="800px" height="800px" />
        </div>
        )
}