import React from 'react';

import { Redirect } from 'react-router';

import ROUTES from 'helpers/routes';

function NotFoundPage() {
    return <Redirect to={ROUTES.button.path} />;
}

export default NotFoundPage;
