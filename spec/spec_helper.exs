Code.require_file("#{__DIR__}/phoenix_helper.exs")
ESpec.configure fn(config) ->
  config.before fn(tags) ->
    {:shared, hello: :world, tags: tags}
    :ok = Ecto.Adapters.SQL.Sandbox.checkout(PhoenixReactBlog.Repo)
  end

  config.finally fn(_shared) ->
    Ecto.Adapters.SQL.Sandbox.checkin(PhoenixReactBlog.Repo, [])
  end
end
