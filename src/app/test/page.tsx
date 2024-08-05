import React from 'react'
import ContentLoader, { type IContentLoaderProps } from 'react-content-loader'

export default function Test(props: IContentLoaderProps): JSX.Element {
    return (
        <ContentLoader backgroundColor="#f3f3f3" foregroundColor="#ecebeb" viewBox="0 0 690 8000" {...props}>
            <rect height="10" rx="2" ry="2" width="160" x="250" y="9" />
            <rect height="11" rx="2" ry="2" width="260" x="200" y="30" />
            <rect height="15" rx="2" ry="2" width="500" x="90" y="50" />
            <rect height="211" rx="2" ry="2" width="211" x="12" y="80" />
            <rect height="211" rx="2" ry="2" width="211" x="240" y="80" />
            <rect height="211" rx="2" ry="2" width="211" x="467" y="80" />
            <rect height="211" rx="2" ry="2" width="211" x="12" y="300" />
            <rect height="211" rx="2" ry="2" width="211" x="240" y="300" />
            <rect height="211" rx="2" ry="2" width="211" x="468" y="300" />
            <circle cx="286" cy="536" r="12" />
            <circle cx="319" cy="535" r="12" />
            <circle cx="353" cy="535" r="12" />
            <rect height="24" rx="0" ry="0" width="52" x="378" y="524" />
            <rect height="24" rx="0" ry="0" width="52" x="210" y="523" />
            <circle cx="210" cy="535" r="12" />
            <circle cx="428" cy="536" r="12" />
        </ContentLoader>
    )
}
