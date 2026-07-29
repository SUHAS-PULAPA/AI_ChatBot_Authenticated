export default function AuthForm({ title, children, onSubmit }) {
  return (
    <div className="auth-shell">
      <div className="auth-card">
        <h2>{title}</h2>
        <p className="auth-subtitle">
          {title === 'Login'
            ? 'Welcome back. Continue your memory-rich conversation.'
            : 'Create your account to start chatting with your AI memory.'}
        </p>
        <form onSubmit={onSubmit}>{children}</form>
      </div>
    </div>
  );
}