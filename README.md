Minimal GitHub Dashboard
========================

I loves me some GitHub, but I don't want to see RSS feeds, I don't check the inbox, and I don't even pay attention to pull requests. I should. I freely admit I should. But I don't. All I want to do is get to my repos or get to repos by other people. I almost always know exactly who, and I almost always know exactly what their username is.

So I de-cluttered my GitHub. And anyone can use it too if they want.

To see all repos for a given username, hit `http://minimal-github.gilesb.com/#{username}`. If the username doesn't exist, or GitHub isn't responding to API traffic, or anything else goes wrong, Minimal GitHub Dashboard will give you no error feedback at all. Not even a 404. It will ignore your request completely. That doesn't bother me, but if it bothers you, by all means, fork away, add tests, and e-mail me at `gilesb@gmail.com`, or tweet at me (`@gilesgoatboy`). You can't rely on the GitHub dashboard to alert me to your pull request, for reasons which I hope are obvious.

TODO
----

Move the assets off Amazon S3; write some server stuff to process png and CSS requests.

Set up `http://minimal-github.gilesb.com/#{username}?p=#{password}` for (insecure but) convenient access to private repos.

Note on Patches/Pull Requests
-----------------------------
 
* Fork the project.
* Make your feature addition or bug fix.
* Add tests for it. This is important so I don't break it in a future version unintentionally.
* Commit, do not mess with rakefile, version, or history.
  If you want to have your own version, that is fine, but bump version in a commit by itself which I can ignore when I pull.
* Use a topic branch. This is not bonus points. This is required.
* Keep the project minimal.
* Send me a pull request.

