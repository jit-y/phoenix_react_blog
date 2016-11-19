defmodule PhoenixReactBlog.PageController do
  use PhoenixReactBlog.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
