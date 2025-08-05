'use client';

import React, { useEffect, useState } from "react"
import { useParams } from 'next/navigation';

export default function BlogDetail() {
    const params = useParams();
    const blogId = params?.id;
    const [detail, setDetail] = useState<any>({});

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await fetch(`/api/blogs/${blogId}`);
            const data = await res.json();
            setDetail(data);
        };

        fetchPosts();
    }, []);

    return (
        <React.Fragment>
            <p>title : {detail?.title || ''}</p>
            <p>content : {detail?.content || ''}</p>
            <p>created_at : {detail?.created_at || ''}</p>
            <p>updated_at : {detail?.updated_at || ''}</p>
        </React.Fragment>
    )
}
