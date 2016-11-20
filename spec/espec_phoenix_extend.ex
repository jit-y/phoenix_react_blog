defmodule ESpec.Phoenix.Extend do
  def model do
    quote do
      alias PhoenixReactBlog.Repo
    end
  end

  def controller do
    quote do
      alias PhoenixReactBlog
      import PhoenixReactBlog.Router.Helpers

      @endpoint PhoenixReactBlog.Endpoint
    end
  end

  def view do
    quote do
      import PhoenixReactBlog.Router.Helpers
    end
  end

  def channel do
    quote do
      alias PhoenixReactBlog.Repo

      @endpoint PhoenixReactBlog.Endpoint
    end
  end

  defmacro __using__(which) when is_atom(which) do
    apply(__MODULE__, which, [])
  end
end
