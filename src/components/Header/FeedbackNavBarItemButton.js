import { firebase } from '../../lib/firebase'
import * as SOCIAL from '../../constants/social'
import * as CONTENT_TYPE from '../../constants/contentType'
import * as CONTENT_ID from '../../constants/contentId'

export default function FeedbackNavBarItemButton() {
    const handleClick = () => {
        firebase.analytics().logEvent('select_content', {
            content_id: CONTENT_ID.HEADER_FEEDBACK_BUTTON,
            content_type: CONTENT_TYPE.BUTTON
        })
    }

    return (
        <a 
            className="navbar-item has-tooltip-arrow has-tooltip-bottom" 
            data-tooltip="Send feedback!"
            href={`mailto:${SOCIAL.EMAIL}`}
            onClick={handleClick}
        >
            <span className="icon is-large">
                <i className="fas fa-exclamation-circle fa-lg"></i>
            </span>
        </a>
    )
}