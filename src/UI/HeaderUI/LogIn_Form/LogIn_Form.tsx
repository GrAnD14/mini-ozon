import * as React from 'react';
import { AuthenticationContext, LocalizationProvider, SessionContext, type Session } from '@toolpad/core/AppProvider';
import { Account } from '@toolpad/core/Account';
import { demoSession } from '../../../types/LogInForm_types/LogIn_types.ts';
import ImagesImports from '../../../types/ImagesImports.ts';
import { IconItem, IconItemImage, IconItemParagraph } from '../headerIcons/headerIcons.styled.ts';

export default function LogIn_Form() {
	const [session, setSession] = React.useState<Session | null>(null);

	const authentication = React.useMemo(() => {
		return {
			signIn: () => {
				setSession(demoSession);
			},
			signOut: () => {
				setSession(null);
			}
		};
	}, []);

	if (!session) {
		return (
			<div onClick={authentication.signIn} style={{ cursor: 'pointer' }}>
				<IconItem>
					<IconItemImage className='Admin' src={ImagesImports.LogIn} alt='Заказы' />
					<IconItemParagraph>Admin</IconItemParagraph>
				</IconItem>
			</div>
		);
	}

	return (
		<LocalizationProvider>
			<AuthenticationContext.Provider value={authentication}>
				<SessionContext.Provider value={session}>
					<Account />
				</SessionContext.Provider>
			</AuthenticationContext.Provider>
		</LocalizationProvider>
	);
}
