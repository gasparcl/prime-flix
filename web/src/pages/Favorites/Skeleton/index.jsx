import { Skeleton } from "@material-ui/lab"

export default function FavoritesSkeleton({ totalItems }) {
    return (
        <>
            <div className="d-flex align-items-center justify-content-center">
                <Skeleton
                    variant="text"
                    height={41}
                    width={288}
                    className="rounded-2"
                />
            </div>
            <div className="d-flex gap-3 mt-4 align-items-center justify-content-start flex-wrap">
                {totalItems.map((item) => (
                    <div key={item.id}>
                        <Skeleton
                            variant="rect"
                            height={10}
                            width={205}
                            className="rounded-2"
                        />
                        <Skeleton
                            variant="circle"
                            height={39}
                            width={39}
                            className="float-end me-3"
                        />
                        <Skeleton
                            variant="rect"
                            height={316}
                            width={205}
                            className="rounded-2"
                        />
                    </div>
                ))}
            </div>
        </>
    )
}
