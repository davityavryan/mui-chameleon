import React, { useEffect } from 'react';

import { redirect } from 'react-router-dom';

import { ROUTES } from 'helpers';

function NotFoundPage(): React.ReactElement {
    useEffect(() => {
        redirect(ROUTES.button.path);
    }, []);

    return null;
}

export default NotFoundPage;
