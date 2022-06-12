/**
 * @url https://infima.dev/docs/components/alert
 * a react component for infima alert css
 */
import React from 'react';

export interface IAlertProps {
  /**
   * @description alert type
   */
  type: 'success' | 'info' | 'warning' | 'danger' | 'primary' | 'secondary';
  /**
   * @description closeable
   */
  closeable?: boolean;
  /**
   * @description content of the alert
   */
  children: React.ReactNode;
}

function Alert({
  type = 'success',
  closeable = false,
  children,
}: IAlertProps): JSX.Element {
  const [visible, setVisible] = React.useState<boolean>(true);
  if (!visible) return null;

  return (
    <div className={`alert alert--${type}`} role="alert">
      {closeable && (
        <button
          aria-label="Close"
          className="clean-btn close"
          type="button"
          onClick={() => setVisible(false)}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      )}
      {children}
    </div>
  );
}

export default Alert;
