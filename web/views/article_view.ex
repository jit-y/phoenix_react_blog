defmodule PhoenixReactBlog.ArticleView do
  use PhoenixReactBlog.Web, :view

  def render("index.json", %{articles: articles}) do
    %{data: render_many(articles, PhoenixReactBlog.ArticleView, "article.json")}
  end

  def render("show.json", %{article: article}) do
    %{data: render_one(article, PhoenixReactBlog.ArticleView, "article.json")}
  end

  def render("article.json", %{article: article}) do
    %{id: article.id,
      title: article.title,
      body: article.body}
  end
end
