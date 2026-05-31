using WholeHealthLiving.Api.Repositories;
using WholeHealthLiving.Api.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy("Frontend", policy =>
    {
        var origins = builder.Configuration.GetSection("Cors:AllowedOrigins").Get<string[]>()
            ?? [
                "http://localhost:3000",
                "http://localhost:3101",
                "http://localhost:3102",
                "https://www.wholehealthliving.com"
            ];

        policy.WithOrigins(origins)
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

builder.Services.AddControllers();
builder.Services.AddOpenApi();
builder.Services.AddSingleton<IContentRepository, ContentRepository>();
builder.Services.AddSingleton<IProviderRepository, ProviderRepository>();
builder.Services.AddSingleton<IContentService, ContentService>();
builder.Services.AddSingleton<IProviderService, ProviderService>();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();
app.UseCors("Frontend");

app.MapControllers();

app.Run();
