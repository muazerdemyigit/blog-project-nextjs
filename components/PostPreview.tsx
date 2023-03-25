import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
    return <div className="border border-violet-200 p-4 rounded-md shadow-md bg-slate-100">
        <p className="text-sm text-slate-400 mb-5">{props.date}</p>
        <Link href={`/posts/${props.slug}`}>
            <h2 className="text-violet-900 hover:underline mb-4">{props.title}</h2>
        </Link>

        <p className="text-slate-700 ">{props.subtitle}</p>

    </div>

}
export default PostPreview;