import * as React from 'react';
import {usePage} from './usePage';

type PageProps = Record<string, unknown>;

const Page: React.FC<PageProps> = ({children}) => {
	const {onLoad} = usePage();

	const render = React.useMemo(() => <>{children}</>, [children]);

	React.useEffect(() => {
		onLoad(render);
	}, [onLoad, render]);

	return render;
};

export default Page;
