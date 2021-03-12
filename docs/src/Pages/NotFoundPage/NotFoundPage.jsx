import React from 'react';

import { Redirect } from 'react-router';

import { ROUTES } from 'helpers';

function NotFoundPage() {
    return <Redirect to={ROUTES.button.path} />;
}

export default NotFoundPage;
