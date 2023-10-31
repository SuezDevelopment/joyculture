import classNames from "classnames";

type Props = {
    className?: string;
};

export default function Logo({ className }: Props) {
    return (
        <a href="/" className={classNames("text-white text-3xl font-bold flex items-center", className)}>
            <img src="/assets/logo.png" srcSet="/assets/logo.png" className="" width={200} height={200} alt="JoyCulture Logo" />
        </a>
    )
}